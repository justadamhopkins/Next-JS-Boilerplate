import {
  render,
  renderHook,
  type RenderHookOptions,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  act,
  type ComponentType,
  type ReactElement,
  type ReactNode,
  Suspense,
} from 'react';

const customRender = (
  ui: ReactElement,
  options: RenderOptions = {},
): RenderResult => render(ui, options);

function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
) {
  return renderHook(callback, options);
}

export function componentRenderer<Props>(
  C: ComponentType<Props>,
  defaultProps: Props = {} as Props & { children?: ReactNode },
  options?: RenderOptions,
): (props?: Partial<Props>, overrideOptions?: RenderOptions) => RenderResult {
  const renderComponent = (props?: Partial<Props>) => (
    <C
      {...defaultProps}
      {...props}
    />
  );
  return (props?: Partial<Props>, overrideOptions?: RenderOptions) =>
    customRender(renderComponent(props), {
      ...options,
      ...overrideOptions,
    });
}

type TAsyncComponent<Props> = (props: Props) => Promise<ReactNode>;

export function createCustomAsyncComponentRenderer<Props>(
  AsyncComponent: TAsyncComponent<Props>,
  defaultProps?: Props,
  options?: RenderOptions,
) {
  return async (props?: Partial<Props>, overrideOptions?: RenderOptions) => {
    const baseProps = defaultProps ?? ({} as Props);
    const resolvedComponent = await AsyncComponent({
      ...baseProps,
      ...props,
    } as Props);

    return await act(async () =>
      customRender(
        <Suspense fallback="loading...">{resolvedComponent}</Suspense>,
        {
          ...options,
          ...overrideOptions,
        },
      ),
    );
  };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, customRenderHook as renderHook };
export { userEvent };

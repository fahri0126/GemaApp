// components/page-wrapper.tsx
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-8">{children}</div>
  );
}

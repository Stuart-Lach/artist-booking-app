// src/components/Buttons.jsx
/* Simple polymorphic button: can render as "button" or Link */
export function PrimaryButton({ as: Component = "button", className = "", children, ...props }) {
  return (
    <Component
      className={
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold " +
        "bg-indigo-500 hover:bg-indigo-400 text-white shadow-sm shadow-indigo-500/40 " +
        "transition-colors " +
        className
      }
      {...props}
    >
      {children}
    </Component>
  );
}

export function SecondaryButton({ as: Component = "button", className = "", children, ...props }) {
  return (
    <Component
      className={
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium " +
        "border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-100 " +
        "transition-colors " +
        className
      }
      {...props}
    >
      {children}
    </Component>
  );
}

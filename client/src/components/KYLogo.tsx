export function KYLogo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-20 w-20 text-3xl"
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center font-bold text-primary-foreground shadow-lg ${className}`}
      data-testid="logo-ky"
    >
      K.Y
    </div>
  );
}

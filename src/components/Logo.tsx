interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-16 h-16'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        
        {/* Main circle */}
        <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
        
        {/* Neural network nodes */}
        <circle cx="30" cy="25" r="3" fill="white" opacity="0.9" />
        <circle cx="50" cy="20" r="3" fill="white" opacity="0.9" />
        <circle cx="70" cy="25" r="3" fill="white" opacity="0.9" />
        <circle cx="25" cy="45" r="3" fill="white" opacity="0.9" />
        <circle cx="50" cy="40" r="4" fill="white" />
        <circle cx="75" cy="45" r="3" fill="white" opacity="0.9" />
        <circle cx="30" cy="65" r="3" fill="white" opacity="0.9" />
        <circle cx="50" cy="70" r="3" fill="white" opacity="0.9" />
        <circle cx="70" cy="65" r="3" fill="white" opacity="0.9" />
        
        {/* Neural network connections */}
        <line x1="30" y1="25" x2="50" y2="40" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="20" x2="50" y2="40" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="70" y1="25" x2="50" y2="40" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="25" y1="45" x2="50" y2="40" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="75" y1="45" x2="50" y2="40" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="40" x2="30" y2="65" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="40" x2="50" y2="70" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="40" x2="70" y2="65" stroke="white" strokeWidth="1" opacity="0.6" />
        
        {/* Central 'G' letter */}
        <path 
          d="M50 30 C58 30 64 36 64 44 C64 52 58 58 50 58 L45 58 L45 50 L52 50 L52 54 L50 54 C54 54 58 50 58 44 C58 38 54 34 50 34 C46 34 42 38 42 44 L42 56 C42 60 46 64 50 64 L55 64 L55 68 L50 68 C44 68 38 62 38 56 L38 44 C38 36 44 30 50 30 Z" 
          fill="white"
          transform="scale(0.7) translate(15, 15)"
        />
      </svg>
    </div>
  )
}
type ColorType = 'default' | 'primary' | 'secondary' | 'danger' | 'line';
type SizeType = 'large' | 'medium' | 'small';

function fixColor(color: ColorType): string {
  switch (color) {
    case 'default':
      return 'bg-gray-300 text-gray-800 hover:bg-gray-400';
    case 'primary':
      return 'bg-blue-500 text-white hover:bg-blue-600';
    case 'secondary':
      return 'bg-gray-500 text-white hover:bg-gray-600';
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600';
    case 'line':
      return 'bg-emerald-400 text-white hover:bg-emerald-600';
  }
}

function fixSize(size: SizeType): string {
  switch (size) {
    case 'large':
      return 'px-6 py-3 text-lg';
    case 'medium':
      return 'px-4 py-2 text-base';
    case 'small':
      return 'px-3 py-1 text-sm';
  }
}

export const Button = ({
  children,
  color = 'default',
  size = 'small',
  fullWidth = false,
  disabled = false,
  classes = [],
  onClick,
}: {
  children: React.ReactNode;
  color?: ColorType;
  size?: SizeType;
  fullWidth?: boolean;
  disabled?: boolean;
  classes?: string[];
  onClick?: (event: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}): JSX.Element => {
  const className = [
    ...classes.map((className) => `!${className}`), // 指定されたカスタムクラスをマージ
    'inline-flex',
    'justify-center',
    'rounded-md',
    'border',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    fixColor(color),
    fixSize(size),
  ].join(' ');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    if (onClick && !disabled) {
      // disabledになったら、イベントをキャンセル
      onClick(event);
    }
  };

  return (
    <button
      // fullWithやdisabledの場合、クラスを追加する
      className={`${className} ${fullWidth ? 'w-full' : ''} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
};

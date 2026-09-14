function Button({ children, onClick, variant='primary', type='button' }) {
    const variants = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-600',
        danger: 'bg-red-50 hover:bg-red-100'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${variants[variant]} px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
        >
            {children}
        </button>
    );
}

export default Button;
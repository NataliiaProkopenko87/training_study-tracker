import useNavigation from '../hooks/use-navigation';

function Link({to, className, children, activeClassName}) {

    const {currentPath, navigate} = useNavigation();

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    const isActive = currentPath === to;
    const classes = isActive ? `${className} ${activeClassName}` : className;

    return (
        <a href={to} className={classes} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;
// eslint-disable-next-line react/prop-types
const Button = ({label, iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full text-white bg-coral-red">
            {label}
            <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full h-5 w-5"/>
        </button>
    );
};

export default Button;
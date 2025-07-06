import Link from "next/link";

const ButtonLogin = (props) => {
    // non destructuring
    // if(props.isLoggedIn) {
    //     return <Link href="/dashboard">Welcome, {props.name}</Link>
    // }

    // destructuring
    const {isLoggedIn, name} = props;
    if(isLoggedIn) {
        return <Link href="/dashboard">Welcome, {name}</Link>
    }
    
    return <button>Login</button>
};

export default ButtonLogin;
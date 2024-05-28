import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth()

    return (
        <div>
            <h1 className="text-3xl">
                <span>Hi, Welcome </span>
                <span className={`${user && 'text-orange-600 font-semibold'}`}>
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </span>

            </h1>
        </div>
    );
};

export default UserHome;
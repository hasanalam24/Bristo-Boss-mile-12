import useAuth from '../../../Hooks/useAuth'

const AdminHome = () => {

    const { user } = useAuth()

    return (
        <div>
            <h1 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
                admin
            </h1>
        </div>
    );
};

export default AdminHome;
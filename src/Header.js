import { Link } from "react-router-dom";

const Header = ()=>{

    return (
        <>
            <div className=" flex justify-between bg-gradient-to-r from-cyan-300 to-sky-300">
                <Link to={"/"}>
                    <img alt="WorkWise Logo" src="../Images/Work Wise (1).png" className="w-52 hover:cursor-pointer m-2"/>
                </Link>
                
                <div className="flex flex-wrap font-serif font-bold">
                    <div className=" m-3 p-4 hover:cursor-pointer hover:text-slate-400">
                        <Link to={"/test"}>Take Test</Link>  
                    </div>
                    <div className="ml-2 my-3 p-4 hover:cursor-pointer hover:text-slate-400">Profile</div>
                    <img alt="Profile logo" src="logo192.png" className="w-7 h-7 my-6 mr-5 bg-black rounded-full "/>
                </div>
            </div>
        </>
    )

}
export default Header;
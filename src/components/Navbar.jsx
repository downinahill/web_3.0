import {/*HiMenu,*/ HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';

// const logo = `https://ibb.co/DbqhPvW`
// const logo = `https://lh3.googleusercontent.com/IGlcuT8gMKNqp1jRL9rLpERYyPgQKbwJ-2FIkX1_gPTIKEJjPSVZeDpNt2CuxLioG4gYaRPyAiIk1S0o9jbxKv9Nsb7ORQd4qMeGGncPSr3g-dFqtFS3mZZUVFgyIlVX9vtmR4x1UFyuhTco2eaDCjoW2E1RKIpBhSc8RD8xPcWo0hrMZOC9FssilT_Y1MRRU0e75d9EVCwLhPO3WPQSz_qzAXWAB6di4ZuWgqJcTypw3W_vhNJ_J_Z28HZHaCNXn2DdRhGTE80tPEKBQ7u2eMMQ4_1ow1C1i8JmCGEPky8iTbE1KWoFYspow52KTR26ziJhaP124VjFlrYbSkRSveguMzwcxCV9KlmoP8qK2Ek7S-BaOTNOXUXWcmDH1706ZSyD0OKye-C-0j7EAIDe1PtC4to2Q02nr0Le_en37uTM1vD1bFspuD07qA7d3G1rMKMHkpH0AteeCXV4ksO74PlvK4IJhnIc61GzVUVomy_Z7ZPrSQLxG_Lp7MuuLv2Mi6eGXwbjX3hu4Vq13aQoqyFarRR7dvkWz9Uwau9MhC1yguYcj2mibO3ubCXbEWy20Z252v9FKpAXrKzjkkM8cDnXAWye33tW72qJEDJY3O0JhxebHuERZJrOhyle053badOpEM3z7i3EEboGJFUJe8Kx8uuH6A2W6g7dfADNUNMZKJhNWA4_bFLQebfI9VF4qX0PDQwqE8fiiOtgXXVRF71KNoTpxlG04tqjpmXE9o81hirnclg-NznDbQU=w888-h584-no`;
// const altImage = `https://lh3.googleusercontent.com/O0jT0a9c6GJi3gPeg4-zh25UTPOfXeVCDlXLlLdJxe1rgKnHYufOkFsbXwgW2rMfI1p_WwwClGYi1NCc0QfBJzNZZiM65Wduz6yPS3Xj56dXfS0WYkJukN-xLwvnNbwlWBCtMbGMdtUAGlRnnrT9L33_Y76FB2j6T0PfGYpm5di_GnJUXH8UoRUEV_3eK6Tefeh7AKgEJqw4cvV4rpdCHSfBePGWNqZQWKNcOaLFXN3Gn9iIFrKWrF-qelIym4OgCV4q9Zin7WApPITixf_5qGluOtyoioGUd1gkbaud674L9hNQ3iciiahXrcfrlLN6id23MThsZEWQ_1eZqtLizdOlofkfWVWDR5nl5W0LO87V68dBCQ_55BqUaiDEPnGW94ffTWjIKVgbgRnDUBZJ4-wfm0Kvq2B_eflyt153mFuLVxFWsedjsdFaohuP8Ll1jqMDbiUbhZBaxbmnkwWC0TgZqximeYgDw8eclX6A6Jck6gc8BeRyUaVQHkkd2MYmhX01AZNB3eC4d6BIESBr5Tdo0i0ZiusZpRVFtL3V5q-vWA9rADDwA9gd3MA_RAl7w-O9GGkNnzSRsAdO186uTiLXaW8gRBGoMed7cSCxpm9rxexRgf6FqZhpiGxsQxiagNg3wLoew0AzepDTEfa5SuFlQ-BNL3--EmOW8aLrcmTZLnv1kf59E7f68Sq103LyI_b4VnO_WTJE0Tiltf176hneI2SrYwvW6GKN3uVjclQOdSuk_AdF-zHhp0o=w966-h452-no`
// const logo = 'https://raw.githubusercontent.com/adrianhajdin/project_web3.0/main/client/images/logo.png'
// ^^^ Importing the logo that appears on top of the page -- need to change logo later ^^^

const NavbarItem = ({title,classProps}) => {
        return <li className={`mx-4 cursor-pointer ${classProps}`}>
                {title}
        </li>
};

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState()

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
                   
            <img
                src="https://i.ibb.co/3sJ25jd/Screen-Shot-2022-06-19-at-1-27-11-PM.png"
                alt="Screen-Shot-2022-06-19-at-1-27-11-PM"  className="w-32"
             >
            </img>

                    {/* <img 
                        src={require('/Users/friznation/Desktop/projects/completed/web3.0/client/src/images/logo-kryptlow.png')}
                        alt={""}
                        className="w-32"
                    ></img> */}

                        </div>
        <ul className="text-white md:flex 
                    hidden list-none
                    flex-row justify-between
                    items-center flex-initial">
            {['Market', 'Exchange','Tutorials','Wallets'].map((item,index) => (
                <NavbarItem key={item + index} title={item} />
            ))}
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
            </li>
          </ul>
          <div className="flex relative">
            {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer"
                    onClick={() => setToggleMenu(false)}
                  />
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer"
                    onClick={() => setToggleMenu(true)} /> }
                    {toggleMenu && (
                        <ul
                        className="z-10 fixed top-0 -right-2 p-3 2-[70vw] h-screen shadow-2xl
                         md:hidden list-none flex flex-col justify-start
                         items-end rounded-md blue-glassmorphism text-white
                         animate-slide-in"
                        >
                        <li className="text-xl w-full my-2">
                        <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {['Market', 'Exchange','Tutorials','Wallets'].map((item,index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                        </ul>
                    )}
            
          </div>
        </nav>
    )
}

export default Navbar;
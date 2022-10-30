import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './style.css';


export const Dock = () => {
   const location = useLocation();

   const isDombyra = location.pathname === '/dombyra';
   const isQobyz = location.pathname === '/qobyz';
   const isPrima = location.pathname === '/prima-qobyz';

   // console.log(location.pathname);

   return (
      <>
         <div className="dock-wrapper">
               <ul>
                  <li>
                     {isDombyra && 
                        <Link to="/qobyz">
                           <span>Қылқобыз</span>
                           <img src="qyl-icons.png" alt="" />
                        </Link>
                     }
                     {isQobyz &&
                        <Link to="/dombyra">
                           <span>Домбыра</span>
                           <img src="dombyra-icons.png" alt="" />
                        </Link>
                     }
                     {isPrima &&
                        <Link to="/dombyra">
                           <span>Домбыра</span>
                           <img src="../dombyra-icons.png" alt="" />
                        </Link>
                     }
                  </li>
                  <li>
                     {isDombyra &&
                        <Link to="/prima-qobyz">
                           <span>Прима-қобыз</span>
                           <img src="/assets/prima-icons.png" alt="" />
                        </Link>
                     } 
                     {isQobyz &&
                        <Link to="/prima-qobyz">
                           <span>Прима-қобыз</span>
                           <img src="/assets/prima-icons.png" alt="" />
                        </Link>
                     }
                     {isPrima &&
                        <Link to="/qobyz">
                           <span>Қылқобыз</span>
                           <img src="/assets/qyl-icons.png" alt="" />
                        </Link>
                     }
                  </li>
               </ul>
         </div>
      </>
   );
};
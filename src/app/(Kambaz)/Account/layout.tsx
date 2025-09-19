import { ReactNode } from "react";
import AccountNavigation from "./navigation";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
   <div id="wd-kambaz">
     <table>
       <tbody>
         <tr>
           <td valign="top">
             <AccountNavigation />
           </td>
           <td valign="top" width="100%">
             {children}
           </td>
         </tr>
       </tbody>
     </table>
  </div>
);}

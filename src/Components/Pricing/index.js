import React from 'react';
import MyButton from "../Utils/MyButton";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Pricing = () => {
    return(
        <div style={{ height: "420px", background: "#cabfe9" ,  margin: 0 ,
	}}> 
			
				
                <h2 className="center_wrapper pricing_section" >Де можна придбати ці книги і багато інших?</h2>   
            
                
                <Slide right>
                     <div className="discountdescription" style={{   margin: 50 , 
	}} >
                         <h3>Наш інтеренет магазин</h3>
						 
                         <p>
							Поки-що наш інтеренет магазин лише у розробці , як тільки він з явиться ми одразу прикріпимо посилання на нього.
                         </p>
                      
                     </div>
                </Slide>
				<Slide left>
                     <div className="discountdescription" style={{   margin: 50 ,
	}} >
                         <h3>Наш оффлайн магазин</h3>
                         <p>
                          Наш оффлайн магазин називається "Bizarrebook" і знаходиться у м.Яворів за адресом вул. Неіснуюча 43-А.
						  Подивитися детальніше місцеположення магазину можна на карті знизу.
                         </p>
                        
                     </div>
				</Slide>	
           
        </div>
    )
}
export default Pricing;
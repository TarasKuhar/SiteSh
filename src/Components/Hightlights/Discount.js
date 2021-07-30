import React, { useState, useEffect} from 'react';
import MyButton from "../Utils/MyButton";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";


const Discount = () => {
    

    return(
        <div className="center_wrapper" style={{ height: "500px", background: "#DEB887",  width:"100%" 
	}}> 
            <div className="discount_wrapper">
                
                <Slide right>
                     <div className="discountdescription" style={{   margin: 20 , border: "3px solid black"
	}} >
                         <h2 style={{ color:"#708090" }} >Гаррі Поттер</h2>
						 
                         <p>
                            Сирота на ім'я Гаррі живе під сходами у будинку дядька ті тітоньски Дурслі. Він поки що не знає, як потрапити на платформу дев'ять і три чверті, користуватися чарівною паличкою, та літати на мітлі. Але одного разу до нього прилетить сова із загаднковим листом, який запрошує його до навчання у Школі Чарів та Чаклунства, і з того дня його життя докорінно зміниться... Варто було лише потрапити до магічного світу, як непоказний сором'язливий хлопець стає у центрі уваги, бо він, виявляється, Хлопчик-який-вижив. 



                         </p>
                      
                     </div>
                </Slide>
				<Slide right>
                     <div className="discountdescription" style={{   margin: 20 , border: "3px solid black"
	}} >
                         <h2 style={{ color:"#708090" }} >Хірург</h2>
                         <p>
                           Він приходить лише у ночі. Безшумно проникає у дім. Крадеться до спальні, де тільки но прокинувшись від сну, самотні жінки потрапляють до приголомшливого кошмару. Зважаючи на те, що він робить зі своїми жертвами, можна припустити, що злодій знається на медицині. Саме через це його називають Хірург.

 Томас Мур та Джейн Ріццолі розслідують серію страшенних вбивств. Злочинець наслідує почерк серійного маніяка, якого було вбито два роки тому. Він копією навіть такі дрібні деталі, про які мало кому відомо. Остання з жертв загиблого маніяка Кетрін Корделл, вбила його, та саме через це стає метою нового вбивці. Із кожною наступною жертвою невідомий наближається до Кетрін. 

						</p>
                        
                     </div>
					   </Slide>
					 <Slide right>
                     <div className="discountdescription" style={{   margin: 20 , border: "3px solid black"
	}} >
                         <h2 style={{ color:"#708090" }} >Гра Престолів</h2>
                         <p>
                            "Гра престолів" - це захопливий світ Сімох Королівств, де літо й зима тривають по кілька років, з півночі наступають загадкові й моторошні вороги, а вельможні родини ведуть ненастанну війну за престол. Майже за три століття до подій першого роману Сім Королівств Вестеросу було з'єднано при династії Таргарієнів, які встановили владу завдяки повному контролю над драконами. Династія Таргарієнів правила триста років, доки громадянська війна та міжособистісні конфлікти не призвели до гибелі всіх драконів. 


                         </p>
                        
                     </div>
              
                </Slide>
            </div>
        </div>
    )
}

export default Discount;
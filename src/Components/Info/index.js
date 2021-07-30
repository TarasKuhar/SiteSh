import React from "react";
import Zoom from "react-reveal/Zoom";

import icon_calendar from '../../resources/img/book1.jpg';
import icon_location from '../../resources/img/book2.jpg';
import icon_l from '../../resources/img/book3.jpg';
const Info = () => {
	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="vn_wrapper">
					<Zoom bottom duration={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_re" />
									<div 
										className="vn_icon"
										style={{
											background: `url(${icon_calendar})`
										}}
									/>
									<div className="vn_title">Топ 1 <h2 style={{ color:"while" }}> Гаррі Поттер </h2> </div>
									<div className="vn_desc"> Автор:Джоан Роулінг <p> Видавництво:А-ба-ба-ла-ма-га</p>   <p>Рік першого видання: 1997</p> Вік:  Від 9 років

</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom bottom duration={500} delay={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_yello" />
									<div 
										className="vn_icon"
										style={{
											background: `url(${icon_location})`
										}}
									/>
									<div className="vn_title"> Топ 2 <h2 style={{ color:"while" }}>Хірург</h2> </div>
									<div className="vn_desc">Автор:Тесс Ґеррітсен <p> Видавництво: Клуб Сімейного Дозвілля</p>   <p>Рік першого видання: 2016 </p> Вік: від 16 років</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom bottom duration={500} delay={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_gree" />
									<div 
										className="vn_icon"
										style={{
											background: `url(${icon_l})`
										}}
									/>
									<div className="vn_title">Топ 3 <h2 style={{ color:"while" }}> Гра престолів</h2> </div>
									<div className="vn_desc">Автор: Джордж Р. Р. Мартін <p> Видавництво: КМ-Букс</p>   <p>Рік першого видання: 1996 </p> Вік: від 18 років </div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	
	)
}

export default Info;
import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41085.19750999784!2d23.351565328840046!3d49.93962777835779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b151362304735%3A0xb1e030fa66422f50!2z0K_QstC-0YDRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1suk!2sua!4v1625834171093!5m2!1suk!2sua" width="99.7%" height="500px" allowfullscreen=""></iframe>
            <div className="location_tag">
                <div>Мапа</div>
            </div>
        </div>
    );
}
export default Location;
import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Shop from './Shop'
import './PagesStyle.css'
import Weekly from './Subscribe/Weekly'
function Home() {
  return (
<>

<Carousel/>

<section>
<div class="spl">
        <h2>Our Specials</h2>
</div>
<div class="table">
<a href="./dishes.html"><img src="https://th.bing.com/th/id/OIP.MC4Gb1oa1nG_K93I0OmTPAHaE7?w=298&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='not' /><h4>Parantha</h4></a>
    <a href="./dishes.html"><img src="https://th.bing.com/th/id/OIP.CMV98hR5u-F4o_B_yPT7zgHaE8?rs=1&pid=ImgDetMain" alt='not' /><h4>Biryani</h4></a>
    <a href="./dishes.html"><img src="https://th.bing.com/th?id=OIF.Q88MVQ6NM%2bDL%2b38wmnSyRA&rs=1&pid=ImgDetMain" alt='not'/><h4>Veg Thali</h4></a>
    <a href="./dishes.html"><img src="https://th.bing.com/th/id/OIP.povaUd1_FMyb0x0mjclU8gHaHY?w=190&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='not'/><h4>Deserts</h4></a>
    <a href="./dishes.html"><img src="https://th.bing.com/th/id/OIP.EuRPjIgdJ6dCRnyPLYjfJAHaG_?w=192&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='not'/><h4>Cake</h4></a>

</div>   
</section>
<section>
<div class="spl">
        <h2>View our weekly dishes</h2>
</div>
<div class="table">
<Weekly/>
</div>
</section>
</>

  )
}

export default Home
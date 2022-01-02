<template>
  <div class="container-fluid mt-18" style="margin-top: 10%;">
        <div class="header-publication toRight d-flex align-center">
            <img src="../../../public/Publications/Vectorstrip.png" alt="" class="strip">
            <img src="../../../public/Publications/its.png" alt="" class="header-pub-elem">
            <img src="../../../public/Publications/robotic.png" alt="" class="header-pub-elem">
            <img src="../../../public/Publications/iris.png" alt="" class="header-pub-elem">
        </div>
        <div class="row fade">
            <div class="col-lg-4 col-sm-12">
                <img src="../../../public/Publications/robo1.png" alt="" width=100%;>
            </div>
            <div class="col-lg-8 col-sm-12 publ d-flex flex-wrap align-items-center">
                <h1>IRIS ITS Publications</h1>
            </div>
        </div>
        <!-- <div class="bottom-assets">
            <img src="../../../public/Publications/Vector.png" alt="" class="toLeft">
            <img src="../../../public/Publications/star.png" alt="" class="spin">
        </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header-pub-elem {
  margin: 0 20px;
}

.header-publication .strip {
  width: 80%;
  height: 1px;
}

.header-publication {
  display: inline-block;
  width: 100%;
  margin: 10px auto;
}

.publ h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 90px;
  line-height: 188px;
  font-weight: 900;
  color: rgba(18, 13, 49, 1) !important;
}

.bottom-assets {
  position: absolute;
  left: 62.4%;
  right: 14.48%;
  top: 108.03%;
  bottom: 7.47%;

  transform: scale(1.5);
}

@media (max-width: 1473px) {
  .publ h1 {
    font-size: 120px;
  }
}
@media (max-width: 1251px) {
  .publ h1 {
    font-size: 100px;
  }

  .publ {
    justify-content: center;
  }
}
@media (max-width: 351px) {
  .publ h1 {
    font-size: 51px;
  }
}
@media (max-width: 835px) {
  .bottom-assets {
    position: absolute;
    left: 62.4%;
    right: 14.48%;
    top: 140.03%;
    bottom: 7.47%;
    /* display: flex; */

    transform: scale(1);
  }

  .header-publication .strip {
    width: 63%;
  }
}
</style>
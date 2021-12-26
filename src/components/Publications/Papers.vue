<template>
  <div>
    <div class="top" style="margin-top: 70px">
      <h1 class="teamPaper">Paper</h1>
    </div>

    <div>
      <v-row 
      style="padding: 0 60px; margin-top: 70px"
      v-for="data in papers"
      :key="data.id">
        <v-col 
        class="top" 
        lg="10" 
        md="12"
        data-aos="fade-right"
        data-aos-duration="1000"
        >
          {{ data.title }}  
        </v-col>

        <v-col class="d-flex justify-lg-end justify-md-center">
          <a 
          :href="data.href" target="_blank">
            <v-btn
              depressed
              color="#6DDCCF"
              :loading="loading4"
              :disabled="loading4"
              @click="loader = 'loading4'"
              lg="2"
              md="12"
              rounded
              Plain
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Download
            </v-btn></a
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return{
      papers:[
        {
          id: 1,
          title: "Artificial Neural Network untuk Pengukuran Posisi Bola Menggunakan Kamera Omnidireksional Pada Robot Sepak Bola Beroda. Published in Indonesian Symposium on Robotic Systems and Control - ISRSC 2017, Universitas Pendidikan Indonesia Bandung",
          href: "file:///../../../public/Publications/Files/Artificial _Neural_Network_Untuk_Pengukuran _Posisi_Bola_Menggunakan_Kamera _Omnidireksional_Pada_Robot_Sepak_Bola_Beroda.pdf",
        },
        {
          id: 2,
          title: "Penggunaan Kamera Global untuk Menentukan Posisi Robot pada Lapangan. Published in Indonesian Symposium on Robotic Systems and Control - ISRSC 2018, Universitas Muhammadiyah Yogyakarta.",
          href: "file:///../../../public/Publications/Files/Penggunaan_Kamera_Global_untuk_Menentukan_Posisi_Robot_pada_Lapangan.pdf",
        },
        {
          id: 3,
          title: "Sistem Pengenalan Suara untuk Perintah pada Robot Sepak Bola Beroda. Published in Indonesian Symposium on Robotic Systems and Control - ISRSC 2019, Universitas Dian Nuswantoro Semarang.",
          href: "file:///../../../public/Publications/Files/Sistem_Pengenalan_Suara_untuk_Perintah_pada_Robot_Sepak_Bola_Beroda.pdf",
        },
        {
          id: 4,
          title: "Dikairono, R., Rachman, A. A., Setiawardhana, Sardjono, T. A., & Purwanto, D. (2017). Motion Planning Simulator for Holonomic Robot Soccer Platform. 2017 International Seminar on Intelligent Technology and Its Applications (ISITIA).",
          href: "file:///../../../public/Publications/Files/Motion_Planning_Simulator_for_Holomic_Robot_Soccer_Platform.pdf",
        },
        {
          id: 5,
          title: "Setiawardhana, Dikariono, R., Sardjono, T. A., & Purwanto, D. (2017). Visual Ball Tracking and Prediction with Unique Segmented Area on Soccer Robot. 2017 International Seminar on Intelligent Technology and Its Applications (ISITIA).",
          href: "file:///../../../public/Publications/Files/Visual_Ball_Tracking_and_Prediction_with_Unique_Segmented_Area_on_Soccer_Robot.pdf",
        },
      ]
    }
  }

}
</script>

<style>
a {
  text-decoration: none;
}

.top .teamPaper {
  display: inline-block;
  font-size: 24px;
  color: #1cc3b2;
  padding-right: 215px;
  padding-left: 115px;
  position: relative;
  margin-bottom: 15px;
}

.top {
  max-width: 770px;
}

.teamPaper::after {
  content: "";
  display: block;
  height: 2px;
  min-width: 100px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.teamPaper::before {
  content: "";
  display: block;
  height: 2px;
  min-width: 200px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

p {
  font-size: 19px;
}
</style>
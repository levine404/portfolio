<template>
  <q-card
    flat
    class="flex column no-wrap items-center full-width"
  >

    <q-card-section style="width: 100%; background: #0a181b">
      <q-intersection
        once
        transition="scale"
        margin="-40px 0px"
      >
        <div class="text-white project-name">{{ project.projectName }}</div>
      </q-intersection>
    </q-card-section>

    <q-card-section class="text-h5 text-center" style="padding: 24px 12px">
      {{ project.whatIsIt }}
    </q-card-section>

    <q-card-section class="showcase full-width">
      <div class="text-center text-h6">Screenshots</div>
      <q-intersection
        once
        transition="scale"
        margin="-40px 0px"
      >
        <Carousel3D
          :items="project.screenshots || []"
          :boxWidth="1200"
          :itemWidth="project.screenshotWidth / 2 || 600"
          :height="project.screenshotHeight / 2 || 400"
          :maintainRatio="true"
        >
          <template v-slot="{
            item,
            index,
            itemIndex,
            distance
          }">
            <ScreenShotDisplay
              :key="index"
              :style="{
                opacity: Math.max(0.1, 1 - distance * 0.3),
                transform: `scale(${Math.max(0.1, 1 - distance * 0.3)})`
              }"
              :img="item"
            />
          </template>
        </Carousel3D>
      </q-intersection>
    </q-card-section>

    <q-card-section style="width: 90%; max-width: 600px; margin-top: 12px">
      <q-intersection
        once
        transition="scale"
        margin="-40px 0px"
      >
        <q-item class="items-start">
          <q-item-section class="text-center">
            <a :href="project.demoLink">
              <q-btn
                label="Demo"
                color="primary"
                icon="touch_app"
                outline
              />
            </a>
            <div class="btn-note">
              {{ project.demoIntro }}
            </div>
          </q-item-section>
          <q-item-section class="text-center">
            <a
              :href="project.repoLink || '#'"
            >
              <q-btn
                label="Code"
                color="primary"
                icon="code"
                outline
                :disable="!project.repoLink"
              />
            </a>
            <div class="btn-note">
              {{ project.repoIntro || 'Code Private' }}
            </div>
          </q-item-section>
        </q-item>
      </q-intersection>
    </q-card-section>

    <q-card-section style="width: 90%; max-width: 600px">
      <q-intersection
        once
        transition="scale"
        margin="-40px 0px"
      >
        <div class="text-center text-h6">Technologies Worked With</div>
        <div class="row justify-evenly">
          <q-badge
            v-for="(tech, index) in [...project.techStackOverview, ...project.allTechsUsed]"
            :key="index"
            style="margin: 6px"
          >
            {{ tech }}
          </q-badge>
        </div>
      </q-intersection>
    </q-card-section>

    <q-card-section style="width: 90%; max-width: 600px">
      <q-intersection
        once
        transition="scale"
        margin="-40px 0px"
      >
        <div class="text-center text-h6">Accomplishments</div>
        <ul class="acc-list">
          <li
            v-for="(acc, index) in project.accomplishments"
            :key="'a' + index"
            style="margin: 6px"
          >
            {{ acc }}
          </li>
        </ul>
      </q-intersection>
    </q-card-section>

  </q-card>
</template>

<script>
import Carousel3D from '../components/Carousel3D.vue'
import ScreenShotDisplay from '../components/ScreenShotDisplay.vue'
export default {
  name: 'ProjectCard',
  components: {
    Carousel3D,
    ScreenShotDisplay
  },
  props: {
    project: Object
    // projectName: String,
    // whatIsIt: String,
    // whatDoesItDo: String,
    // whoIsItFor: String,
    // screenShot: String,
    // techStackOverview: Array,
    // allTechsUsed: Array,
    // problemsSolved: Array,
    // demoLink: String,
    // demoIntro: String,
    // repoLink: String,
    // repoIntro: String
  }
}
</script>

<style lang="scss">
.project-name {
  font-size: 6vh;
  font-family: 'Dosis', sans-serif;
  text-align: center;
}
.stack {
  font-size: 2vh;
  font-family: 'Merriweather', serif;
}
.what {
  font-size: 3vh;
  font-family: 'Dosis', sans-serif;
}
.ans {
  font-size: 1.5vh;
  margin-bottom: 12px;
}
.screenshot {
  width: 100%;
  min-height: 500px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.btn-note {
  margin-top: 12px;
}
.showcase {
  padding-bottom: 80px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  border-bottom: 2px solid #777;
}
</style>

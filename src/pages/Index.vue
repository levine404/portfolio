<template>
  <q-page class="flex column no-wrap">
    <PageBlock
      name="about"
      color="rgb(151, 120, 36)"
    >
      <div
        class="flex flex-center justify-center items-center column splash text-white"
      >
        <div class="main-av">
          <q-avatar size="300px">
            <img src="/statics/pic.png">
          </q-avatar>
        </div>
        <div class="name">
          JUSTIN LEVINE
        </div>
        <div class="title">
          Full-Stack Developer
        </div>
        <div class="links">
          <q-btn-group>
            <q-btn
              label="Projects"
              outline
              color="white"
              icon="burst_mode"
              @click="scrollTo('projects')"
            />
            <q-btn
              label="About"
              outline
              color="white"
              icon="fas fa-info-circle"
              @click="scrollTo('pb-about')"
            />
            <q-btn
              label="Contact"
              outline
              color="white"
              icon="mail"
              @click="scrollTo('contact')"
            />
          </q-btn-group>
        </div>
        <div class="intro flex flex-center">
          <div>
            Passionate developer with a background in linguistics - Spent the last 10 years living in Nepal conducting linguistic research, translating, and
            developing CAT (computer assisted translation) software with an emphasis on provisions for minority languages
          </div>
        </div>
      </div>
    </PageBlock>

    <PageBlock
      v-for="(project, projectIndex) in projects"
      :key="project.projectName"
      :name="projectIndex === 0 ? 'projects' : project.projectName"
      color="#fff"
    >
      <ProjectCard :project="project" />
    </PageBlock>

    <PageBlock
      color="#0a181b"
      name="pb-about"
    >

      <div class="text-white text-center" style="width: 80%; margin: auto">

        <div class="projects-header">About</div>

        <hr width="100%" />

        <div>
          My first experience with programming was when I was 12 years old.  I've been in love ever since.  Coupled together with my love for technology,
          linguistics has also become an important part of my life.  I spent many years as a linguist researching unwritten languages in Nepal.  The past few years
          I've been developing my own software products to advance translation accessibility for underdeveloped/unwritten languages.
        </div>

        <br />
        <br />
        <br />

        <div class="text-h5">Technologies I love</div>

        <hr width="40%" />

        <a href="https://www.vuejs.org">
          <img src="/statics/vue-logo.png" height="60" style="margin: 12px" />
        </a>
        <a href="https://www.quasar.dev">
          <img src="/statics/quasar-logo.png" height="60" style="margin: 12px" />
        </a>
        <a href="https://www.nodejs.org">
          <img src="/statics/node-logo.png" height="60" style="margin: 12px" />
        </a>
        <a href="https://www.mongodb.com">
          <img src="/statics/mongodb-logo.png" height="60" style="margin: 12px" />
        </a>
        <a href="https://www.typescriptlang.org">
          <img src="/statics/ts-logo.png" height="60" style="margin: 12px" />
        </a>
        <a href="https://www.cypress.io">
          <img src="/statics/cypress-logo.png" height="60" style="margin: 12px" />
        </a>

        <br />
        <br />

        <div class="text-h5">Hobbies/Interests</div>

        <hr width="40%" />

        <div style="display: grid; grid-template-columns: 50% 50%; max-width: 1200px; margin: auto; grid-row-gap: 24px; grid-column-gap: 24px; align-items: start">
          <div class="text-center">
            <img src="/statics/lang.png" style="width: 40%; max-width: 150px" />
            <div class="text-h6">Linguistics</div>
            <div>I really enjoy languages, analyzing them.  I speak multiple languages aside from English such as Nepali, Tibetan, and Lowa.  I've stuided the basics of many more.</div>
          </div>
          <div class="text-center">
            <img src="/statics/code.png" style="width: 40%; max-width: 150px" />
            <div class="text-h6">Coding</div>
            <div>Technology has always inspired me and one of my favorite ways to express my creativity is through code.</div>
          </div>
          <div class="text-center">
            <img src="/statics/travel.png" style="width: 40%; max-width: 150px" />
            <div class="text-h6">Travel</div>
            <div>I love to travel and experience new places and new cultures.  I've traveled to 18 different countries so far and plan to visit even more.</div>
          </div>
          <div class="text-center">
            <img src="/statics/lift.png" style="width: 40%; max-width: 200px" />
            <div class="text-h6">Powerlifting</div>
            <div>I love strength training and nutrition.  This past Septemeber I participated in my first powerlifting meet.  I enjoyed myself and hope to compete again soon.</div>
          </div>
        </div>

        <br />
        <br />

      </div>

    </PageBlock>

    <PageBlock
      color="#0a181b"
    >

      <div style="min-height: 180%; background: #0a181b; background-image: url('/statics/skyline.jpg'); background-size: cover; background-position: center bottom;">
        <div
          id="contact"
          class="text-white"
        >

          <div class="projects-header">Contact</div>

          <hr width="80%" />

          <div class="contact-item">
            <q-icon name="phone" /> 718-864-0294
          </div>

          <div class="contact-item">
            <a href="mailto:levine404@gmail.com" class="elink"><q-icon name="mail" /> Email - levine404@gmail.com</a>
          </div>

          <div class="contact-item">
            <a href="https://www.linkedin.com/in/justin-levine-163860b6/" class="elink"><q-icon name="fab fa-linkedin" /> LinkedIn - Justin Levine</a>
          </div>

          <div class="contact-item">
            <a href="https://github.com/levine404" class="elink"><q-icon name="fab fa-github" /> GitHub - levine404</a>
          </div>

          <div
            class="contact-top"
            @click="scrollTo('about')"
          >
            <q-icon name="arrow_upward" />
          </div>
        </div>

      </div>
    </PageBlock>

  </q-page>
</template>

<script>
import PageBlock from '../components/PageBlock.vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../data/projects'
export default {
  name: 'PageIndex',
  components: {
    PageBlock,
    ProjectCard
  },
  data () {
    return { projects }
  },
  methods: {
    scrollTo (name) {
      const pageBlock = document.getElementById(name)
      if (pageBlock) {
        pageBlock.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.splash {
  height: 100%;
  background: url('/statics/back.jpg');
  background-position: center center;
  background-size: cover;
}
.main-av {
  margin-top: 24px;
}
.name {
  text-align: center;
  font-family: 'Merriweather', serif;
  font-size: 6vh;
  padding: 12px;
  text-shadow: 0 0 12px rgb(85, 73, 64);
}
.title {
  text-align: center;
  font-family: 'Dosis', sans-serif;
  font-size: 4vh;
  letter-spacing: 2px;
  padding: 12px;
  text-shadow: 0 0 8px rgb(31, 28, 25);
}
.links {
  margin-top: 24px;
}
.intro, .note {
  font-weight: 900;
  width: 100%;
  margin-top: 48px;
  font-size: 2vh;
  font-family: 'Dosis', sans-serif;
  line-height: 2;
  text-align: center;
  padding: 12px;
  text-shadow: 0 0 6px rgb(19, 18, 17);
  word-spacing: 6px;
  letter-spacing: 2px;
  div {
    max-width: 820px;
  }
}
.projects-header {
  font-family: 'Merriweather', serif;
  text-align: center;
  font-size: 5vh;
  margin-top: 42px;
  margin-bottom: 24px;
}
.contact-item {
  font-size: 3vh;
  margin: 24px;
  text-align: center;
}
.contact-note {
  text-align: center;
  padding: 12px;
  font-size: 2vh;
  margin-top: 24px;
}
.contact-top {
  margin-top: 96px;
  text-align: center;
  font-size: 4vh;
  cursor: pointer;
}
.elink {
  text-decoration: none;
  color: #fff;
}
</style>

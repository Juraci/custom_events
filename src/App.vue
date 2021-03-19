<template>
  <div class="notes-section">
    <div class="columns">
      <div class="column has-text-centered">
        <strong>Notes</strong>
        <div v-for="(note, index) in notes" :key="index" class="notes">
          {{ note }}
        </div>
      </div>
      <div class="column has-text-centered">
        <strong>Timestamp</strong>
        <div
          v-for="(timestamp, index) in timestamps"
          :key="index"
          class="timestamps"
        >
          {{ timestamp }}
        </div>
      </div>
    </div>
    <InputComponent @add-note="addNote" :placeholder="placeholder" />
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent";
export default {
  name: "App",
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },
  components: { InputComponent },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
  },
};
</script>

<style lang="scss"></style>

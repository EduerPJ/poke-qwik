import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hola mundo!!!</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Learning Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

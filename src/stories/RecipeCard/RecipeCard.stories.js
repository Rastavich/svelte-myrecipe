import RecipeCard from "../RecipeCard/RecipeCard.svelte";

export default {
  title: "Example/RecipeCard",
  component: RecipeCard,
  argTypes: {
    loading: { action: "loading" },
    loaded: { action: "loaded" },
  },
};

const Template = ({ loading, loaded, ...args }) => ({
  Component: RecipeCard,
  props: args,
  on: { loading },
});

export const loading = Template.bind({});
Loading.args = {};

export const loaded = Template.bind({});
loaded.args = {};

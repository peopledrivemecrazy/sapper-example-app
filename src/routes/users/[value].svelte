<script context="module">
  //script x2 -> module (optional/serverside), script
  //markup -> html
  //style -> css
  export function preload({ params }) {
    const { value } = params;

    return this.fetch(`users/${value}.json`)
      .then((e) => e.json())
      .then((user) => {
        return {
          user,
        };
      });
  }
</script>

<script>
  export let user;

  let { id, name, email, username, address } = user;
  //fetch
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<h1>User data</h1>

<p>{name}</p>
<p>{email}</p>
<p>{username}</p>
<p>{address.city}</p>

<script context="module">
  export function preload() {
    return this.fetch(`users.json`)
      .then((r) => r.json())
      .then((data) => {
        return { data };
      });
  }
</script>

<script>
  export let data;
</script>

<ul>
  {#each data as { name, email, username }}
    <a href="users/{username}">
      <li>{name}: {email}</li>
    </a>
  {/each}
</ul>

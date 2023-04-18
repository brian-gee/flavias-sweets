<script>
  let submitting = false;
  let submitResult = null;
  let errors = { username: '', email: '', password: '' };

  async function handleSubmit(event) {
    event.preventDefault();
    submitting = true;

    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('/.netlify/functions/submitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      submitResult = result.message;
    } catch (error) {
      submitResult = 'Error submitting form.';
    } finally {
      submitting = false;
    }
  }
</script>

<h1>Register</h1>
<form on:submit={handleSubmit}>
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  {#if errors.username}
    <p>{errors.username}</p>
  {/if}
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  {#if errors.email}
    <p>{errors.email}</p>
  {/if}
  <label>
    Password:
    <input type="password" name="password" required minlength="6" />
  </label>
  {#if errors.password}
    <p>{errors.password}</p>
  {/if}
  <button>Register</button>
</form>

{#if submitting}
  <p>Submitting...</p>
{/if}
{#if submitResult}
  <p>{submitResult}</p>
{/if}

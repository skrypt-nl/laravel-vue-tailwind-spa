<template>
  <div class="w-full h-full flex">
    <h1 class="text-7xl font-bold text-gray-400 m-auto leading-none select-none text-center">
      Coming soon!
    </h1>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: 'Components' }
  }
}
</script>

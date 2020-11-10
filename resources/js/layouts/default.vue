<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <navbar />

    <div class="flex flex-grow">
      <sidebar />
      <div class="bg-gray-100 flex-grow overflow-auto p-8">
        <child />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '../components/Sidebar'

export default {
  name: 'MainLayout',

  components: {
    Sidebar,
    Navbar
  }
}
</script>

<template>
  <div class="bg-white w-80 border-r p-8 -my-2">
    <sidebar-item route="dashboard.home">
      Home
    </sidebar-item>
    <sidebar-item route="dashboard.components">
      Components
    </sidebar-item>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  components: { SidebarItem }
}
</script>

<style scoped>

</style>

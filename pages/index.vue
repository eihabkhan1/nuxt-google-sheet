<script setup lang="ts">
import "../assets/css/global.css"

const getSetting = await useApi.getSetting()
const setting = useSetting(getSetting.value)

</script>

<template>
  <div id="main-container" class="container">
    <Card v-if="!setting?.isConnected">
      <template #header>
        <h2 class="main-header">
          Google sheets
        </h2>
      </template>
      <template #default>
        <SetupGuide />
        <Setting />
      </template>
    </Card>
    <Card v-else>
      <template #header>
        <h2 class="main-header">
          Google sheets
        </h2>
      </template>
      <template #headerAccessory>
        <ConnectedUser />
      </template>
      <template #default>
        <Sheets />
      </template>
    </Card>
    <NuxtLink to="/sheet/3">
      Single page
    </NuxtLink>
  </div>
</template>

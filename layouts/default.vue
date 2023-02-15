<template>
  <div class="bg-gray-50 main">
    <nav
      class="bg-transparent "
    >
      <div class="container flex flex-wrap items-center justify-end mx-auto">
        <div class="hidden w-full md:block md:w-auto">
          <ul
            class="flex flex-col py-8 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm menu"
          >
            <li>
              <NuxtLink
                to="/"
                class="menu__item"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#"
                class="menu__item"
              >
                About Me
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to=""
                class="menu__item"
              >
                Skills
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blogs"
                class="menu__item"
              >
                Blogs
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to=""
                class="menu__item"
                >Contact Me</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mx-auto">
      <slot />
    </div>
    <div class="footer">Footer</div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  width: 100%;
  position: relative;
}
.footer{
  margin-top: 100px;
}
.menu .menu__item{
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
}
</style>

<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link to="/Games" alt="Games"
          ><span class="icon icon-games"></span
          ><span class="nav-text">Games</span></router-link
        >
      </li>
      <li>
        <router-link to="/Tables" alt="Tables"
          ><span class="icon icon-tables"></span
          ><span class="nav-text">Tables</span></router-link
        >
      </li>
      <li>
        <router-link to="/Players" alt="Players"
          ><span class="icon icon-players"></span
          ><span class="nav-text">Players</span></router-link
        >
      </li>
      <li class="nav-cta">
        <router-link to="/MyTeam" alt="My Team">My Team</router-link>
      </li>
    </ul>
  </div>
</template>


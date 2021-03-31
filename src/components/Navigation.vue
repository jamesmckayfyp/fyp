<template>
    <div class="navigation">
        <ul>
            <li><router-link to="/nav1">Games</router-link></li>
            <li><router-link to="/nav2">Comps</router-link></li>
            <li><router-link to="/nav3">Players</router-link></li>
            <li class="nav-cta"><router-link to="/nav4">My Team</router-link></li>
        </ul>
        <router-view />
    </div>
</template>


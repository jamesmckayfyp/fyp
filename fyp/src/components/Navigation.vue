<template>
    <div class="navigation">
        <ul>
            <li><router-link to="/nav1">Nav</router-link></li>
            <li><router-link to="/nav2">Nav</router-link></li>
            <li><router-link to="/nav3">Nav</router-link></li>
            <li><router-link to="/nav4">Nav</router-link></li>
            <li class="nav-cta"><a href="#">My Team</a></li>
        </ul>
        <router-view />
    </div>
</template>


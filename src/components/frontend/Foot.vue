<template>
    <!-- Footer -->
    <footer class="text-white bg-gray-900">
        <div class="container pt-20 mx-auto">
            <div class="flex flex-wrap">
                <div class="w-full p-4 xl:mr-auto xl:w-4/12">
                    <img src="@/assets/img/logo-main.png" class="w-48 mb-6"/>
                    <p class="mb-4 text-sm">Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.</p>
                    <div class="mb-4">
                        <router-link to="/" class="hover:text-indigo-200">+1 234 567-890</router-link>
                        <br>
                        <router-link to="/" class="hover:text-indigo-200">hello@demo.com</router-link>
                    </div>
                    <div>
                        <router-link to="/" class="mr-2 text-xl hover:text-indigo-200"><i class="fa-facebook-square fab"></i></router-link>
                        <router-link to="/" class="mr-2 text-xl hover:text-indigo-200"><i class="fa-twitter-square fab"></i></router-link>
                        <router-link to="/" class="mr-2 text-xl hover:text-indigo-200"><i class="fa-linkedin fab"></i></router-link>
                    </div>
                </div>
                <div class="w-full p-4 xl:w-2/12 sm:w-4/12">
                    <h4 class="mb-8 text-lg font-medium text-gray-400 uppercase">About</h4>
                    <ul>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Get Quote</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Enterprise Plan</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Become an Affiliate</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Our Portfolio</router-link>
                        </li>
                    </ul>
                </div>
                <div class="w-full p-4 xl:w-2/12 sm:w-4/12">
                    <h4 class="mb-8 text-lg font-medium text-gray-400 uppercase">Services</h4>
                    <ul>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Web Design</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Web Development</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">WordPress</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Digital Marketing</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Content Writing</router-link>
                        </li>
                    </ul>
                </div>
                <div class="w-full p-4 xl:w-2/12 sm:w-4/12">
                    <h4 class="mb-8 text-lg font-medium text-gray-400 uppercase">Other</h4>
                    <ul>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Business Stories</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Learning</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Licence</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Refund Policy</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/" class="hover:text-indigo-200">Terms of Service</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="p-4 text-center">
                <hr class="mb-4 opacity-25">
                <p class="text-sm">Copyright © 2020 Demo Inc.</p>
            </div>
        </div> 
    </footer>
</template>

<script>
export default {
    name: 'FrontendFooter'
}
</script>
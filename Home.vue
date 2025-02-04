<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import padelImage from "@/assets/Padel.jpg";
import logo from "@/assets/padel-cafe-logo.png";

const form = ref({
  name: "",
  email: "",
  phone: "",
});

const router = useRouter();
const toast = useToast();

const handleSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.phone) {
    toast.error("Please fill out all fields!");
    return;
  }

  // Simulate sending an OTP
  toast.success(`OTP sent to ${form.value.phone}`);
  router.push("/otp");
};
</script>

<template>
  <div
    class="h-screen w-full bg-cover bg-center flex items-center justify-center"
    :style="{ backgroundImage: `url(${padelImage})` }"
  >
    <div class="bg-white shadow-2xl rounded-lg p-8 pt-2 w-full max-w-sm">
      <div class="text-center">
        <img :src="logo" alt="Padel Logo" class="mx-auto h-24 mb-4" />
        <h1 class="text-2xl font-bold mb-2">Welcome to Padel Cafe</h1>
        <p class="text-gray-600 mb-6">
          Please enter your Name, Email, and Phone Number
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium pb-1"
            >Name</label
          >
          <input
            id="name"
            type="text"
            v-model="form.name"
            class="w-full border-gray-300 rounded-md shadow-sm focus:ring-padel focus:border-padel"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium pb-1"
            >Email</label
          >
          <input
            id="email"
            type="email"
            v-model="form.email"
            class="w-full border-gray-300 rounded-md shadow-sm focus:ring-padel focus:border-padel"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-6">
          <label for="phone" class="block text-gray-700 font-medium pb-1"
            >Phone Number</label
          >
          <input
            id="phone"
            type="tel"
            v-model="form.phone"
            class="w-full border-gray-300 rounded-md shadow-sm focus:ring-padel focus:border-padel"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="px-20 bg-padel text-white font-semibold py-2 rounded-md shadow hover:bg-padel-dark"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.bg-padel {
  background-color: #3b82f6;
}
.bg-padel-dark {
  background-color: #2563eb;
}
</style>

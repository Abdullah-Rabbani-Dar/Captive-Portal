<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const form = ref({
  otp: "",
});

const toast = useToast();

const handleVerifyOtp = () => {
  if (form.value.otp === "123456") { // Replace with actual OTP verification logic
    toast.success("OTP Verified! Connecting to Padel Cafe WiFi...");
    // Add logic to redirect or complete the process
  } else {
    toast.error("Invalid OTP. Please try again.");
  }
};
</script>

<template>
  <div
    class="h-screen w-full bg-cover bg-center flex items-center justify-center"
    :style="{ backgroundImage: `url('/src/assets/Padel.jpg')` }"
  >
    <div class="bg-white shadow-2xl rounded-lg p-8 pt-2 w-full max-w-sm">
      <div class="text-center">
        <img
          src="/src/assets/padel-cafe-logo.png"
          alt="Padel Logo"
          class="mx-auto h-24 mb-4"
        />
        <h1 class="text-2xl font-bold mb-2">Enter OTP</h1>
        <p class="text-gray-600 mb-6">
          We have sent an OTP to your phone. Please enter it below to connect to
          Padel Cafe WiFi.
        </p>
      </div>
      <form @submit.prevent="handleVerifyOtp">
        <div class="mb-6">
          <label for="otp" class="block text-gray-700 font-medium pb-1">OTP</label>
          <input
            id="otp"
            type="text"
            v-model="form.otp"
            maxlength="6"
            class="w-full border-gray-300 rounded-md shadow-sm focus:ring-padel focus:border-padel"
            placeholder="Enter OTP"
          />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="px-20 bg-padel text-white font-semibold py-2 rounded-md shadow hover:bg-padel-dark"
          >
            Verify OTP
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

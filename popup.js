(function () {
  const isHelpNudgeFormFiled = localStorage.getItem("isHelpNudgeFormFiled");
  if (isHelpNudgeFormFiled === "true") return;
  const modal = `
  <style scoped>
        @import "https://leap-public.s3.ap-south-1.amazonaws.com/popup.css";
    </style>
  <button
  id="popup-btn"
  class="fixed bottom-4 z-10000 right-4 flex items-center justify-center w-25 h-12 px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-lg focus:outline-none"
>
  <span>Need help</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 20v-2"
    />
  </svg>
</button>

<div
  id="help-modal"
  class="hidden fixed bottom-20 right-4 p-4 rounded-md shadow-lg z-10000"
  style="background-color: #f6f3ff; width:360px"
>
  <div id="help-step1" class="mt-8">
    <div class="mb-1 flex justify-between">
      <p class="text-2xl font-bold w-2/3">Hi, how can we help you?</p>
      <img src="https://leapscholar.com/tapri_assets/helpNudge/help.svg" />
    </div>
    <p class="mb-4 text-sm font-light">
      Choose options with what you need help with
    </p>
    <div
      class="flex flex-wrap gap-4 mt-6"
      id="options-container"
    >
      <button
        class="option-btn border border-gray-400 rounded-xl py-2 px-4 text-sm font-medium text-gray-700"
        data-value="Option 1"
      >
        Long Option 1
      </button>
      <button
        class="option-btn border border-gray-400 rounded-xl py-2 px-4 text-sm font-medium text-gray-700"
        data-value="Option 2"
      >
        2
      </button>
      <button
        class="option-btn border border-gray-400 rounded-xl py-2 px-4 text-sm font-medium text-gray-700"
        data-value="Option 3"
      >
        Option 3
      </button>
      <button
        class="option-btn border border-gray-400 rounded-xl py-2 px-4 text-sm font-medium text-gray-700"
        data-value="Option 4"
      >
        short 4
      </button>
      <button
        class="option-btn border border-gray-400 rounded-xl py-2 px-4 text-sm font-medium text-gray-700"
        data-value="Option 5"
      >
        Option 5
      </button>
    </div>

    <div class="flex justify-end">
      <button
        id="help-next-btn"
        class="mt-2 bg-gray-400 hover:none text-white font-bold py-2 px-4 rounded-lg"
      >
        <span class="flex items-center">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
  <div id="help-step2" class="hidden">
    <div class="text-lg font-semibold mb-4 w-2/3">
      Please enter your details to reach out to you
    </div>
    <div class="mb-4">
      <input
        class="form-input border border-gray-400 w-full py-2 px-3 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        name="name"
        id="name"
        placeholder="Enter name"
        required
      />
      <span class="text-red-500 text-sm"></span>
    </div>
    <div class="mb-4">
      <input
        class="form-input border border-gray-400 w-full py-2 px-3 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter phone number"
        required
      />
      <span class="text-red-500 text-sm"></span>
    </div>
    <div class="flex justify-end w-full">
      <button
        id="help-submit-btn"
        class="bg-blue-500 w-full text-white p-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  </div>
  <div
    class="absolute top-0 right-0 m-4 cursor-pointer"
    id="help-close-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-gray-600 hover:text-gray-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
  <div id="help-step3" class="hidden p-4 flex flex-col items-center">
    <img
      src="https://staging.leapscholar.com/tapri_assets/helpNudge/thank.svg"
    />
    <p class="mt-4 text-xl text-gray-500 font-bold">
      Thank you for your details
    </p>
    <p class="my-2 text-md text-gray-600 font-normal">
        Our team will reach out to you shortly
    </p>
  </div>
</div>`;

  document.body.insertAdjacentHTML("beforeend", modal);

  const helpBtn = document.getElementById("popup-btn");
  const helpModal = document.getElementById("help-modal");
  const helpCloseBtn = document.getElementById("help-close-btn");

  const helpNextBtn = document.getElementById("help-next-btn");
  const helpStep1 = document.getElementById("help-step1");
  const helpStep2 = document.getElementById("help-step2");
  const helpStep3 = document.getElementById("help-step3");
  const helpSubmitBtn = document.getElementById("help-submit-btn");
  const helpNameInput = document.getElementById("name");
  const helpPhoneInput = document.getElementById("phone");
  const optionsContainer = document.getElementById("options-container");
  const optionsButtons = document.querySelectorAll(".option-btn");

  const selectedOptions = [];

  optionsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const option = event.target.dataset.value;
      const index = selectedOptions.indexOf(option);
      if (selectedOptions.includes(option)) return;

      if (index === -1 && selectedOptions.length < 2) {
        selectedOptions.push(option);
        event.target.classList.add(
          "bg-blue-500",
          "text-white",
          "border-blue-500"
        );
        event.target.classList.remove(
          "bg-gray-100",
          "text-gray-700",
          "border-gray-400"
        );
      } else if (index !== -1) {
        selectedOptions.splice(index, 1);
        event.target.classList.remove(
          "bg-gray-100",
          "text-gray-700",
          "border-gray-400"
        );
        event.target.classList.add(
          "bg-blue-500",
          "text-white",
          "border-blue-500"
        );
      } else if (selectedOptions.length === 2) {
        console.log(selectedOptions, "selectedOptions");
        const removedOption = selectedOptions.shift();
        console.log(removedOption, "removedOption");
        const removedButton = document.querySelector(
          `button[data-value="${removedOption}"]`
        );
        removedButton.classList.remove(
          "bg-blue-500",
          "text-white",
          "border-blue-500"
        );
        console.log(removedButton, "removedButton");
        removedButton.classList.add(
          "bg-gray-100",
          "text-gray-700",
          "border-gray-400"
        );
        selectedOptions.push(option);
        event.target.classList.add(
          "bg-blue-500",
          "text-white",
          "border-blue-500"
        );
        event.target.classList.remove(
          "bg-gray-100",
          "text-gray-700",
          "border-gray-400"
        );
      }

      if (selectedOptions.length !== 0) {
        helpNextBtn.classList.remove("bg-gray-400", "hover:none");
        helpNextBtn.classList.add("bg-blue-500", "hover:bg-blue-700");
      } else {
        helpNextBtn.classList.add("bg-gray-400", "hover:none");
        helpNextBtn.classList.remove("bg-blue-500", "hover:bg-blue-700");
      }
    }
  });

  helpBtn.addEventListener("click", () => {
    helpModal.classList.remove("hidden");
    helpStep1.classList.remove("hidden");
  });

  helpCloseBtn.addEventListener("click", () => {
    helpModal.classList.add("hidden");
    helpStep1.classList.remove("hidden");
    helpStep2.classList.add("hidden");
  });

  helpNextBtn.addEventListener("click", () => {
    helpStep1.classList.add("hidden");
    helpStep2.classList.remove("hidden");
  });

  helpNameInput.addEventListener("input", () => {
    if (helpNameInput.classList.contains("border-red-500")) {
      helpNameInput.classList.remove("border-red-500");
      helpNameInput.nextElementSibling.textContent = "";
    }
  });

  helpPhoneInput.addEventListener("input", () => {
    if (helpPhoneInput.classList.contains("border-red-500")) {
      helpPhoneInput.classList.remove("border-red-500");
      helpPhoneInput.nextElementSibling.textContent = "";
    }
  });

  helpSubmitBtn.addEventListener("click", () => {
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(helpNameInput.value)) {
      helpNameInput.classList.add("border-red-500");
      helpNameInput.nextElementSibling.textContent =
        "Name can only contain alphabets";
    } else {
      helpNameInput.classList.remove("border-red-500");
      helpNameInput.nextElementSibling.textContent = "";
    }

    if (!phoneRegex.test(helpPhoneInput.value)) {
      helpPhoneInput.classList.add("border-red-500");
      helpPhoneInput.nextElementSibling.textContent =
        "Phone number should be a 10-digit number";
    } else {
      helpPhoneInput.classList.remove("border-red-500");
      helpPhoneInput.nextElementSibling.textContent = "";
    }

    if (
      nameRegex.test(helpNameInput.value) &&
      phoneRegex.test(helpPhoneInput.value)
    ) {
      const url = new URL(window.location.href);
      const domainParts = url.hostname.split(".");
      const subdomain = domainParts.length > 1 ? domainParts[0] + "." : "";
      console.log(subdomain,'subdomain');
      const body = {
        phone: helpPhoneInput.value,
        name: helpNameInput.value,
        howLeapHelp: selectedOptions.toString(),
      };
      fetch(
        `https://${subdomain}leapscholar.com/api/scholarRoute?path=lead`,
        {
          headers: {
            "content-type": "application/json",
            Referer: window.location.href,
          },
          body: JSON.stringify(body),
          method: "POST",
        }
      )
        .then(() => {
          helpStep3.classList.remove("hidden");
          helpNameInput.value = "";
          helpPhoneInput.value = "";
          helpStep1.classList.add("hidden");
          helpStep2.classList.add("hidden");
          helpModal.classList.remove("bottom-20");
          helpModal.classList.add("bottom-1");
          helpBtn.classList.add("hidden");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          helpStep3.classList.remove("hidden");
          helpNameInput.value = "";
          helpPhoneInput.value = "";
          helpStep1.classList.add("hidden");
          helpStep2.classList.add("hidden");
          helpModal.classList.remove("bottom-20");
          helpModal.classList.add("bottom-1");
          helpBtn.classList.add("hidden");
        });
    }
  });
})();

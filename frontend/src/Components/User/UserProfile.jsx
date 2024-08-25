import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    // <!-- Profile Card -->
    <>
      <div class="m-20 h-full">
        <div class="border-b-2 block md:flex">
          <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div class="flex justify-between">
              <span class="text-xl font-semibold block"> Profile</span>
              <a
                href="#"
                class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
              >
                Edit
              </a>
            </div>

            <div class="w-full p-8 mx-2 flex justify-center">
              <img
                id="showImage"
                class="max-w-xs w-32 items-center border"
                src={userInfo.photo}
                alt=""
              />
            </div>
          </div>

          <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div class="rounded  shadow p-6">
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  First Name
                </label>
                <div class="flex">
                  <input
                    disabled
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={`${userInfo.firstName}`}
                  />
                </div>
              </div>
              <div class="pb-6">
                <label
                  for="lastName"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Last Name
                </label>
                <div class="flex">
                  <input
                    disabled
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={`${userInfo.lastName}`}
                  />
                </div>
              </div>
              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Email
                </label>
                <input
                  disabled
                  id="email"
                  class="border-1  rounded-r px-4 py-2 w-full"
                  type="email"
                  value={userInfo.email}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

import axiosInstance from "../controllers/axiosController";

const deviceController = {
  getAllDevices: async () => {
    try {
      const response = await axiosInstance.get("/devices");
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching all devices:",
        error.response?.data?.detail
      );
      throw new Error(
        error.response?.data?.detail || "Failed to fetch devices"
      );
    }
  },

    createDevice: async (deviceData) => {
    try {
      const response = await axiosInstance.post("/devices", deviceData);
      return response.data;
    } catch (error) {
      console.error("Error creating device:", error.response?.data?.detail);
      throw new Error(
        error.response?.data?.detail || "Failed to create device"
      );
    }
  },

  updateDevice: async (deviceId, deviceData) => {
    try {
      const response = await axiosInstance.patch(
        `/devices/${deviceId}`,
        deviceData
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error updating device with ID ${deviceId}:`,
        error.response?.data?.detail
      );
      throw new Error(
        error.response?.data?.detail || "Failed to update device"
      );
    }
  },

  deleteDevice: async (deviceId) => {
    try {
      const response = await axiosInstance.delete(`/devices/${deviceId}`);
      return response.data;
    } catch (error) {
      console.error(
        `Error deleting device with ID ${deviceId}:`,
        error.response?.data?.detail
      );
      throw new Error(
        error.response?.data?.detail || "Failed to delete device"
      );
    }
  },
  getAllDevicespage: async (limit , offset ) => {
    try {
      const response = await axiosInstance.get(`/devices?limit=${limit}&offset=${offset}`);
      return response.data; // expected: { items, total, limit, offset }
    } catch (error) {
      console.error("Error fetching devices:", error.response?.data?.detail);
      throw new Error(
        error.response?.data?.detail || "Failed to fetch devices"
      );
    }
  },
  
  
  
};

export default deviceController;

export const getAllDevices = deviceController.getAllDevices;
export const addDevice = deviceController.createDevice;
export const editSingleDevice = deviceController.updateDevice;
export const deleteDevice = deviceController.deleteDevice;
export const getAllDevicespage = deviceController.getAllDevicespage;

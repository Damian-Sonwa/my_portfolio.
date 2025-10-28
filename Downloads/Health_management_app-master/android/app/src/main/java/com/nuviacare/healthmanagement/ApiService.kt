package com.nuviacare.healthmanagement

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.*

// Base URL for your backend API
// For local development with Android emulator: http://10.0.2.2:5001/api/
// For physical device on same network: http://192.168.x.x:5001/api/ (use your computer's IP)
// For production: https://health-management-app-joj5.onrender.com/api/

const val BASE_URL = "http://10.0.2.2:5001/api/"  // Android emulator localhost
// const val BASE_URL = "https://health-management-app-joj5.onrender.com/api/"  // Production

// API Interfaces
interface HealthManagementApi {
    @GET("users/profile")
    suspend fun getUserProfile(): UserProfile
    
    @GET("vitals")
    suspend fun getVitals(): List<VitalReading>
    
    @GET("medications")
    suspend fun getMedications(): List<Medication>
    
    @GET("appointments")
    suspend fun getAppointments(): List<Appointment>
}

// Data Models
data class UserProfile(
    val id: String,
    val name: String,
    val email: String
)

data class VitalReading(
    val id: String,
    val type: String,
    val value: String,
    val unit: String,
    val timestamp: String
)

data class Medication(
    val id: String,
    val name: String,
    val dosage: String,
    val frequency: String
)

data class Appointment(
    val id: String,
    val doctorName: String,
    val date: String,
    val time: String
)

// Retrofit Instance
object RetrofitClient {
    private val retrofit = Retrofit.Builder()
        .baseUrl(BASE_URL)
        .addConverterFactory(GsonConverterFactory.create())
        .build()
    
    val api: HealthManagementApi = retrofit.create(HealthManagementApi::class.java)
}


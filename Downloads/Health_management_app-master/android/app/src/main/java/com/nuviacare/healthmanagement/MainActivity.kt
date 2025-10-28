package com.nuviacare.healthmanagement

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.viewinterop.AndroidView
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdSize
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.MobileAds

class MainActivity : ComponentActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Initialize Mobile Ads SDK
        MobileAds.initialize(this) { initializationStatus ->
            // You can handle initialization status if needed
        }
        
        setContent {
            NuviacareTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    MainScreen()
                }
            }
        }
    }
}

@Composable
fun NuviacareTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = lightColorScheme(
            primary = androidx.compose.ui.graphics.Color(0xFF2196F3),
            secondary = androidx.compose.ui.graphics.Color(0xFF03A9F4),
            tertiary = androidx.compose.ui.graphics.Color(0xFF00BCD4)
        )
    ) {
        content()
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MainScreen() {
    val context = LocalContext.current
    
    // Change this to false to use production ad unit ID
    val useTestAds = false
    
    val adUnitId = if (useTestAds) {
        context.resources.getString(R.string.test_banner_ad_unit_id)
    } else {
        context.resources.getString(R.string.banner_ad_unit_id)
    }
    
    val sampleData = remember {
        listOf(
            "Dashboard",
            "Vitals Tracking",
            "Medications",
            "Appointments",
            "Health Records",
            "Care Plans",
            "Telehealth",
            "Device Integration",
            "AI Chat",
            "Settings"
        )
    }
    
    Box(modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(bottom = 60.dp) // Space for the banner ad
        ) {
            // App Header
            TopAppBar(
                title = { Text("Nuviacare Health Management") },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary
                )
            )
            
            // Main Content
            LazyColumn(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f)
                    .padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(sampleData) { item ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.surfaceVariant
                        )
                    ) {
                        Text(
                            text = item,
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            style = MaterialTheme.typography.bodyLarge
                        )
                    }
                }
            }
        }
        
        // Banner Ad - Fixed at bottom
        BannerAd(
            adUnitId = adUnitId,
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
        )
    }
}

@OptIn(ExperimentalComposeUiApi::class)
@Composable
fun BannerAd(adUnitId: String, modifier: Modifier = Modifier) {
    AndroidView(
        factory = { context ->
            AdView(context).apply {
                setAdSize(AdSize.BANNER)
                this.adUnitId = adUnitId
                loadAd(AdRequest.Builder().build())
            }
        },
        modifier = modifier.height(50.dp)
    )
}

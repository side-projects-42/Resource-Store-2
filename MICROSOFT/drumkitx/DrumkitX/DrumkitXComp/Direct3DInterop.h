/**
 * Copyright (c) 2013-2014 Microsoft Mobile. All rights reserved.
 *
 * Nokia, Nokia Connecting People, Nokia Developer, and HERE are trademarks
 * and/or registered trademarks of Nokia Corporation. Other product and company
 * names mentioned herein may be trademarks or trade names of their respective
 * owners.
 *
 * See the license text file delivered with this project for more information.
 */

#pragma once

#include <DrawingSurfaceNative.h>

#include "BasicTimer.h"
#include "DrumkitRenderer.h"
#include "Recorder.h"

namespace DrumkitXComp
{
    public delegate void RequestAdditionalFrameHandler();
    public delegate void RecreateSynchronizedTextureHandler();

    [Windows::Foundation::Metadata::WebHostHidden]
    public ref class Direct3DInterop sealed : public Windows::Phone::Input::Interop::IDrawingSurfaceManipulationHandler
    {
    public:
	    Direct3DInterop();
	    virtual ~Direct3DInterop();

	    Windows::Phone::Graphics::Interop::IDrawingSurfaceContentProvider^ CreateContentProvider();

	    // IDrawingSurfaceManipulationHandler
	    virtual void SetManipulationHost(Windows::Phone::Input::Interop::DrawingSurfaceManipulationHost^ manipulationHost);

	    event RequestAdditionalFrameHandler^ RequestAdditionalFrame;
	    event RecreateSynchronizedTextureHandler^ RecreateSynchronizedTexture;

	    property Windows::Foundation::Size WindowBounds;
	    property Windows::Foundation::Size NativeResolution;
	    property Windows::Foundation::Size RenderResolution
	    {
		    Windows::Foundation::Size get(){ return m_renderResolution; }
		    void set(Windows::Foundation::Size renderResolution);
	    }

	    void StartAudioEngine();
	    void StopAudioEngine();

	    void StartRecording();
	    void StopRecordingOrPlayback();
	    void StartPlayback();

    protected:
	    // Event Handler
	    void OnPointerPressed(Windows::Phone::Input::Interop::DrawingSurfaceManipulationHost^ sender, 
                              Windows::UI::Core::PointerEventArgs^ args);

    internal:
	    HRESULT STDMETHODCALLTYPE Connect(_In_ IDrawingSurfaceRuntimeHostNative* host);
	    void STDMETHODCALLTYPE Disconnect();
	    HRESULT STDMETHODCALLTYPE PrepareResources(_In_ const LARGE_INTEGER* presentTargetTime, _Out_ BOOL* contentDirty);
	    HRESULT STDMETHODCALLTYPE GetTexture(_In_ const DrawingSurfaceSizeF* size, _Out_ IDrawingSurfaceSynchronizedTextureNative** synchronizedTexture, _Out_ DrawingSurfaceRectF* textureSubRectangle);
	    ID3D11Texture2D* GetTexture();

    private: // Data
	    DrumkitRenderer^ m_renderer;
	    BasicTimer^ m_timer;
	    Recorder^ m_recorder;
	    Windows::Foundation::Size m_renderResolution;
    };
}

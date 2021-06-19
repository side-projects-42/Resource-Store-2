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

#include <Windows.Phone.Graphics.Interop.h>

#include "Direct3DInterop.h"

class Direct3DContentProvider : public Microsoft::WRL::RuntimeClass<
		Microsoft::WRL::RuntimeClassFlags<Microsoft::WRL::WinRtClassicComMix>,
		ABI::Windows::Phone::Graphics::Interop::IDrawingSurfaceContentProvider,
		IDrawingSurfaceContentProviderNative>
{
public:
	Direct3DContentProvider(DrumkitXComp::Direct3DInterop^ controller);

	void ReleaseD3DResources();

	// IDrawingSurfaceContentProviderNative
	HRESULT STDMETHODCALLTYPE Connect(_In_ IDrawingSurfaceRuntimeHostNative* host);
	void STDMETHODCALLTYPE Disconnect();

	HRESULT STDMETHODCALLTYPE PrepareResources(_In_ const LARGE_INTEGER* presentTargetTime, _Out_ BOOL* contentDirty);
	HRESULT STDMETHODCALLTYPE GetTexture(_In_ const DrawingSurfaceSizeF* size, _Out_ IDrawingSurfaceSynchronizedTextureNative** synchronizedTexture, _Out_ DrawingSurfaceRectF* textureSubRectangle);

private:
	HRESULT InitializeTexture(_In_ const DrawingSurfaceSizeF* size);

private: // Data
	DrumkitXComp::Direct3DInterop^ m_controller;
	Microsoft::WRL::ComPtr<IDrawingSurfaceRuntimeHostNative> m_host;
	Microsoft::WRL::ComPtr<IDrawingSurfaceSynchronizedTextureNative> m_synchronizedTexture;
};
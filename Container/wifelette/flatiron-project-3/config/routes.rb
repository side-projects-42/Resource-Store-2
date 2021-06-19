Rails.application.routes.draw do
  get "/events/current", to: "events#current", as: "current"
  get "/events/past", to: "events#past", as: "past"
  
  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}
  root to: "events#index"
  resources :specs, only: [:edit, :new, :create, :destroy]
  resources :events do 
    resources :packages
  end
  resources :perks

end

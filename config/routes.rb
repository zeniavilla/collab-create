Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  namespace :api do
    resources :services, except: [:new, :edit]
  end

  root 'welcome#index'
end

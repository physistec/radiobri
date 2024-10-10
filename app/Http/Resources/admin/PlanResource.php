<?php

namespace App\Http\Resources\admin;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'storage_space' => $this->storage_space,
            'free' => json_decode($this->free),
            'active' => json_decode($this->active),
            'recommended' => json_decode($this->recommended), 
            'currency' => $this->currency, 
            'badge' => $this->badge, 
            'upgradable' => $this->upgradable, 
            'stripe_id' => $this->stripe_id, 
            'paypal_id' => $this->paypal_id, 
            'currency_symbol' => $this->currency_symbol, 
            'interval' => $this->interval, 
            'amount' => $this->amount,  
            'position' => $this->position, 
            'displayed_features' => json_decode($this->displayed_features),
            'roles' => $this->roles()->get()->pluck('id'),
            'permissions' => $this->permissions()->get()->pluck('id')
        ];
    }
}
